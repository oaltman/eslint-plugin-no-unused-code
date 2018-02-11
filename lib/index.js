/**
 * @fileoverview Removes unused code
 * @author Ondřej Altman
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
	'no-unused-code': require('./rules/no-unused-code')
}



