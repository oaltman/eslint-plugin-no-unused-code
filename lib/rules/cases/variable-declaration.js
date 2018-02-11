module.exports = (fixer, unusedVar) => {
	const currentNode = unusedVar.identifiers[0]
	const declarations = currentNode.parent.parent.declarations
	if (declarations.length === 1) {
		return fixer.replaceTextRange(
			unusedVar.identifiers[0].parent.parent.range,
			''
		);
	}
	const currentStart = currentNode.start
	const declarationAfter = declarations.find(p => p.start > currentStart)
	const range = declarationAfter
		? [currentStart, declarationAfter.start]
		: [declarations.slice(-2)[0].end, currentNode.parent.end]
	return fixer.replaceTextRange(
		range,
		''
	);
}
