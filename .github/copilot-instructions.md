# GitHub Copilot Instructions

## DOCS Workflow

When you receive the exact prompt text: **"DOCS"**

### Process:
1. Check for unstaged changes using git status
2. Analyze the modified files to understand what has changed using git diff <filePath>
3. Document the changes in `.github/README.md*`

### Documentation Guidelines:
- Be brief and succinct
- No emojis
- Focus on what changed and why it matters
- Include technical details relevant to the change type
- Use clear, direct language
- Organize changes logically within the existing document structure
- Do not summarize yourself in the chat window.

### Output Format:
- Add changes to existing sections where appropriate
- Create new sections if the change represents a new category
- Maintain consistent formatting with existing documentation
- Include relevant code examples or configuration snippets when helpful
- Remove obsolete/deprecated documentation in favor of your updated sections.

---
## COMMIT Workflow

When you receive the exact prompt text: **"COMMIT"**

### Process:
1. Check for unstaged changes using git status
2. Use git diff <filePath> to analyze the modified files and their modifications
3. Generate a concise, descriptive commit message, (<commit-message>), that accurately reflects the changes made in 10 words or fewer.
4. Run "git add .; git commit -m '<commit-message>'; git push" to commit and push the changes.
