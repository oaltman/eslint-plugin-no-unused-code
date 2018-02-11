function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

module.exports = (fixer, unusedVar) => {
	const currentNode = unusedVar.identifiers[0]
	const currentStart = currentNode.start
	const currentEnd = currentNode.end
	if (currentNode.parent.elements.length === 1) {
		return fixer.replaceTextRange(
			currentNode.parent.range,
			`UNUSED_VAR_${getRndInteger(0, Number.MAX_SAFE_INTEGER)}`
		);
	}
	const next = currentNode.parent.elements.find((p) => p.start > currentEnd)
	const range = next
		? [currentStart, currentEnd]
		: [currentStart, currentEnd]
	return fixer.replaceTextRange(
		range,
		''
	);
}
