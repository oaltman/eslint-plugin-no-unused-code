module.exports = (fixer, unusedVar) => {
	const currentNode = unusedVar.identifiers[0].parent.type === 'RestElement'
		? unusedVar.identifiers[0].parent
		: unusedVar.identifiers[0]
	const currentNodeWithDefault = currentNode.parent.type === 'AssignmentPattern'
		? unusedVar.identifiers[0].parent
		: unusedVar.identifiers[0]
	const currentStart = currentNodeWithDefault.start
	const currentEnd = currentNodeWithDefault.end
	const functionDeclaration = currentNodeWithDefault.parent.parent.parent
	const paramNumber = functionDeclaration.params
		.map((param, i) => (param.start <= currentStart && param.end >= currentEnd) && i+1)
		.filter(Boolean)[0]
	const allProperties = currentNodeWithDefault.parent.parent.properties
	if (allProperties.length === 1) {
		return fixer.replaceTextRange(
			currentNodeWithDefault.parent.parent.range,
			`UNUSED_VAR_${paramNumber}`
		);
	}
	const propertyAfter = allProperties.find(p => p.start > currentStart)
	const range = propertyAfter
		? [currentStart, propertyAfter.start]
		: [currentNodeWithDefault.parent.parent.properties.slice(-2)[0].end, currentNodeWithDefault.end]
	return fixer.replaceTextRange(
		range,
		''
	);
}
