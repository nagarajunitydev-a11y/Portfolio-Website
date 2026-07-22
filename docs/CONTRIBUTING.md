# Contributing Guide

## Coding Standards

- Keep components focused and reusable.
- Prefer shared content in [lib/portfolio/data.js](../lib/portfolio/data.js) for marketing copy.
- Use existing UI patterns and utility classes from [app/globals.css](../app/globals.css).
- Preserve accessibility by adding labels and semantic markup where appropriate.

## Branch Strategy

A simple trunk-based strategy is recommended:

```text
main
  └── feature/<short-name>
```

## Commit Conventions

Use concise, descriptive commits such as:

```text
feat: add new section animation
fix: handle contact form validation
chore: update documentation
```

## Pull Request Process

1. Create a feature branch.
2. Make the change and add or update documentation if needed.
3. Verify the app locally with the relevant build or dev commands.
4. Open a pull request with a clear summary and testing notes.

## Review Checklist

- Code is readable and consistent
- No secrets or credentials are committed
- Documentation is updated where behavior changes
- The app still builds locally

## Related Documentation

- [README](README.md)
- [TESTING](TESTING.md)
- [SECURITY](SECURITY.md)
