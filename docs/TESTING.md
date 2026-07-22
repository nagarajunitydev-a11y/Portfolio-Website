# Testing Documentation

## Testing Strategy

The repository currently contains a minimal test scaffold under [tests](../tests). The visible application behavior is not yet covered by automated tests in the source tree.

## Unit Tests

Unit tests are not presently implemented for the React components or API handlers.

> Needs Manual Review: Add component tests for form validation, navigation behavior, and portfolio filtering.

## Integration Tests

The contact submission flow is a good candidate for future integration tests:
- validate request payloads
- verify database insertion behavior
- verify error handling for invalid input

## Test Commands

No dedicated test script is currently defined in [package.json](../package.json).

Recommended future commands:

```bash
yarn test
```

## Suggested Testing Approach

1. Add unit tests for individual components.
2. Add API-level tests for the next route handlers.
3. Add smoke tests for the build pipeline.

## Related Documentation

- [CONTRIBUTING](CONTRIBUTING.md)
- [TROUBLESHOOTING](TROUBLESHOOTING.md)
- [SECURITY](SECURITY.md)
