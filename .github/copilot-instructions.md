# GitHub Copilot Instructions

## DOCS Workflow

When you receive the exact prompt text: **"DOCS"**

### Process:
1. Check for unstaged changes using git status
2. Analyze the modified files to understand what has changed using git diff <filePath>
3. Document the changes in the appropriate `.github/*` files based on the nature of the changes:
   - **ARCHITECTURE.md**: For structural, architectural, or design pattern changes
   - **README.md**: For feature additions, usage changes, and overall premise of the project as a whole
   - **New files**: Create specific documentation files if needed for complex features in the .github/ directory

### Documentation Guidelines:
- Be brief and succinct
- No emojis
- Focus on what changed and why it matters
- Include technical details relevant to the change type
- Use clear, direct language
- Organize changes logically within the existing document structure
- Do not summarize yourself in the chat window.

### Change Categories:
- **Architecture changes**: Update ARCHITECTURE.md with new patterns, structure modifications, or design decisions
- **Feature changes**: Update README.md with new functionality, API changes, or usage examples
- **Configuration changes**: Document in README.md setup or configuration modifications
- **Dependencies**: Note significant dependency additions or changes in README.md

### Output Format:
- Add changes to existing sections where appropriate
- Create new sections if the change represents a new category
- Maintain consistent formatting with existing documentation
- Include relevant code examples or configuration snippets when helpful
- Remove obsolete/deprecated documentation in favor of your updated sections.
