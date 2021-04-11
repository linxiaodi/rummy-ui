
const stripCodeAndLanguage = (source) => {
	const reg = /```(.*)([^]+?)```/
	const [,language,match] = source.match(reg);
	return {
		code: match.trim(),
		language: language || 'jsx'
	};
}

const stripOutImport = (code) => {
	const importReg = /import.+[\n]/g
	const exportDefaultReg = /export default\s+?([a-zA-Z_0-9]+);?/
	const [, name] = code.match(exportDefaultReg);
	return {
		bareCode: code.replace(importReg, '').replace(exportDefaultReg, ''),
		name
	}
}

module.exports = {
	stripCodeAndLanguage,
	stripOutImport
}
