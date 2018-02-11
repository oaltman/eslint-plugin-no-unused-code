module.exports = (fixer, unusedVar) => {
	const currentNode = unusedVar.identifiers[0]
	return fixer.replaceTextRange(
		currentNode.parent.range,
		''
	);
}
