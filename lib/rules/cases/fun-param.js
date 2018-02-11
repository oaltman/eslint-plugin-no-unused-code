module.exports = (fixer, unusedVar) => {
	const currentNode = unusedVar.identifiers[0].parent.type === 'RestElement'
		? unusedVar.identifiers[0].parent
		: unusedVar.identifiers[0]
	const currentNodeWithDefault = currentNode.parent.type === 'AssignmentPattern'
		? unusedVar.identifiers[0].parent
		: unusedVar.identifiers[0]
	const currentEnd = currentNodeWithDefault.end
	const allFunctionParameters = currentNodeWithDefault.parent.params
	if (allFunctionParameters.length === 1) {
		return fixer.replaceTextRange(
			currentNodeWithDefault.range,
			currentNodeWithDefault.parent.start === currentNodeWithDefault.start
				? '()'
				: ''
		);
	}
	const parametersBefore = allFunctionParameters.filter(p => {
		return p.end < currentEnd
	})
	return fixer.replaceTextRange(
		[parametersBefore.slice(-1)[0].end, currentEnd],
		''
	);
}
