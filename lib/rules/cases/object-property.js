module.exports = (fixer, unusedVar) => {
	const currentStart = unusedVar.parent.start
	if (unusedVar.parent.parent.properties.length === 1) {
		return fixer.replaceTextRange(
			unusedVar.parent.parent.parent.parent.range,
			''
		);
	}
	const propertyAfter = unusedVar.parent.parent.properties.find(p => p.start > currentStart)
	const range = propertyAfter
		? [currentStart, propertyAfter.start]
		: [unusedVar.parent.parent.properties.slice(-2)[0].end, unusedVar.end]
	return fixer.replaceTextRange(
		range,
		''
	);
}
