# Troubleshooting

## Common Issues

### 1. Contact form submission fails

Symptoms:
- The UI shows an error state after submit.

Possible causes:
- MONGO_URL is missing or invalid.
- The MongoDB instance is unavailable.

Suggested steps:
1. Check environment variables.
2. Confirm the database connection string is valid.
3. Inspect the server response from the API route.

### 2. Images do not load

Possible causes:
- Asset path is wrong.
- Remote image URL is blocked.
- File does not exist under public/Images.

Suggested steps:
1. Verify the path exists under public/.
2. Check the browser network panel for failed requests.
3. Review the fallback image logic in the portfolio card component.

### 3. Development server will not start

Possible causes:
- Dependencies are not installed.
- Node version is incompatible with the project requirements.

Suggested steps:
1. Run yarn install.
2. Confirm the current directory is the project root.
3. Review the terminal output for missing packages or configure errors.

## Debugging Steps

- Reproduce the issue locally.
- Search the relevant component or API route.
- Check the browser console and server logs.
- Confirm environment values before re-running the app.

## Related Documentation

- [SETUP](SETUP.md)
- [API](API.md)
- [SECURITY](SECURITY.md)
