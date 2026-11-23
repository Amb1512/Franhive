import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import contactHandler from "./api/contact.js";
import chatHandler from "./api/chat.js";
import turnstileConfigHandler from "./api/turnstile-config.js";

function readBody(request) {
	return new Promise((resolve, reject) => {
		const chunks = [];
		request.on("data", (chunk) => chunks.push(chunk));
		request.on("end", () => resolve(Buffer.concat(chunks)));
		request.on("error", reject);
	});
}

function createVercelResponse(response) {
	return {
		setHeader(name, value) {
			response.setHeader(name, value);
		},
		status(statusCode) {
			response.statusCode = statusCode;
			return {
				json(payload) {
					response.setHeader("Content-Type", "application/json");
					response.end(JSON.stringify(payload));
				},
			};
		},
	};
}

function contactApiDevPlugin() {
	return {
		name: "contact-api-dev",
		configureServer(server) {
			server.middlewares.use(async (request, response, next) => {
				const url = request.url?.split("?")[0];
				const handler =
					url === "/api/turnstile-config"
						? turnstileConfigHandler
						: url === "/api/contact"
							? contactHandler
							: url === "/api/chat"
								? chatHandler
								: null;
				if (!handler) {
					next();
					return;
				}

				try {
					const rawBody = await readBody(request);
					request.body = rawBody.length
						? JSON.parse(rawBody.toString("utf8"))
						: {};
					await handler(request, createVercelResponse(response));
				} catch {
					if (!response.headersSent) {
						response.statusCode = 500;
						response.setHeader("Content-Type", "application/json");
						response.end(
							JSON.stringify({
								success: false,
								message:
									url === "/api/contact"
										? "The form server is unavailable. Please try again or email info@franhive.com."
										: url === "/api/chat"
											? "The AI service could not be reached."
											: "The request could not be completed.",
							}),
						);
					}
				}
			});
		},
	};
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const serverEnvironmentVariables = [
		"GROQ_API_KEY",
		"GROQ_BASE_URL",
		"GROQ_MODEL",
		"TURNSTILE_SECRET_KEY",
		"TURNSTILE_SITE_KEY",
		"VITE_TURNSTILE_SITE_KEY",
		"FORM_TAXI_ENDPOINT",
	];

	for (const name of serverEnvironmentVariables) {
		if (env[name]) {
			process.env[name] = env[name];
		}
	}

	return {
		plugins: [contactApiDevPlugin(), react()],
	};
});
