function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

module.exports = (fixer, unusedVar) => {
	const currentNode = unusedVar.identifiers[0]
	const currentStart = currentNode.parent.start
	const currentEnd = currentNode.parent.end
	if (currentNode.parent.parent.properties.length === 1) {
		return fixer.replaceTextRange(
			currentNode.parent.parent.range,
			`UNUSED_VAR_${getRndInteger(0, Number.MAX_SAFE_INTEGER)}`
		);
	}
	const next = currentNode.parent.parent.properties.find((p) => p.start > currentEnd)
	const endOfObject = currentNode.parent.parent.end
	const range = next
		? [currentStart, next.start]
		: [currentStart, endOfObject -1 ]
	return fixer.replaceTextRange(
		range,
		''
	);
}
