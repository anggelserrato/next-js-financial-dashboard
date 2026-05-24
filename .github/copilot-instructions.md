# Commit Message Guidelines

This project strictly follows the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.
All commit messages **must** conform to this standard. When generating or suggesting commit messages, always apply the rules below.

---

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- The **type** and **description** are mandatory.
- The **scope**, **body**, and **footers** are optional but recommended when they add clarity.

---

## Allowed Types

| Type       | When to use                                                    | SemVer impact |
| ---------- | -------------------------------------------------------------- | ------------- |
| `feat`     | Introduces a new feature to the codebase                       | MINOR         |
| `fix`      | Patches a bug in the codebase                                  | PATCH         |
| `docs`     | Documentation changes only                                     | none          |
| `style`    | Formatting, whitespace, semicolons — no logic change           | none          |
| `refactor` | Code restructuring that neither fixes a bug nor adds a feature | none          |
| `perf`     | Performance improvements                                       | PATCH         |
| `test`     | Adding or correcting tests                                     | none          |
| `build`    | Changes to the build system or external dependencies           | none          |
| `ci`       | Changes to CI/CD configuration and scripts                     | none          |
| `chore`    | Maintenance tasks that don't modify src or test files          | none          |
| `revert`   | Reverts a previous commit                                      | depends       |

---

## Rules

1. **Type is mandatory** and must be one of the allowed types listed above.
2. **Scope** is optional. When used, it must be a noun enclosed in parentheses describing the section of the codebase affected — e.g., `feat(parser):`, `fix(auth):`, `docs(api):`.
3. **Description** must immediately follow the `type` or `type(scope)` prefix (after `: `). It must:
   - Be written in the **imperative mood** (e.g., `add`, `fix`, `update`, not `added`, `fixes`, `updating`)
   - Start with a **lowercase** letter
   - **Not** end with a period
4. **Body** is optional. When included, it must be separated from the description by one blank line. Use it to explain _what_ and _why_, not _how_.
5. **Footers** are optional. Each footer must follow the format `Token: value` or `Token #value`. Multi-word tokens use `-` instead of spaces (e.g., `Reviewed-by:`). Exception: `BREAKING CHANGE` may use a space.
6. **Breaking changes** must be indicated in one of two ways (or both):
   - Append `!` before the `:` in the type/scope prefix — e.g., `feat!:` or `feat(api)!:`
   - Add a `BREAKING CHANGE: <description>` footer
   - Breaking changes trigger a **MAJOR** SemVer bump regardless of the type used.
7. Types and descriptions are **case-insensitive** by convention — use lowercase consistently.
8. `BREAKING CHANGE` in footers **must be uppercase**.

---

## Examples

### Simple fix (no body, no footer)

```
fix: prevent racing of requests
```

### New feature with scope

```
feat(lang): add Polish language
```

### Documentation update

```
docs: correct spelling of CHANGELOG
```

### Breaking change using `!`

```
feat!: send an email to the customer when a product is shipped
```

### Breaking change with scope and `!`

```
feat(api)!: send an email to the customer when a product is shipped
```

### Breaking change with both `!` and footer

```
feat!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### Commit with body and multiple footers

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

### Commit with body and breaking change footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Revert commit

```
revert: let us never again speak of the noodle incident

Refs: 676104e, a215868
```

---

## When Generating Commit Messages

- **Analyze the staged diff or changed files** to determine the correct type automatically.
- **Prefer a specific scope** when the change is clearly isolated to one module, package, or domain area.
- **Keep the description under 72 characters** to ensure readability in all git tooling.
- **Write the body** when the reason for the change is not self-evident from the description alone.
- **Always flag breaking changes** — do not silently omit `!` or `BREAKING CHANGE:` footers.
- **Suggest multiple commits** if the staged changes span more than one logical unit of work.
- **Never mix types** in a single commit — if a change both fixes a bug and adds a feature, split it into two commits.
- When reverting, reference the original commit SHA(s) in a `Refs:` footer.

---

## SemVer Mapping

| Commit type                              | Release bump |
| ---------------------------------------- | ------------ |
| Any commit with `BREAKING CHANGE` or `!` | MAJOR        |
| `feat`                                   | MINOR        |
| `fix`, `perf`                            | PATCH        |
| All other types                          | none         |
