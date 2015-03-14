/*
 * Each element of this array contains the data for the corresponding
 * aggression tier from the original crab data.
 *
 * There is some inter-disciplinary translation that has to happen
 * regarding the number of the tiers. As originally recorded and
 * as they will be displayed, the tier numbers start with "1".
 * However, when the data is converted to a "computer friendly"
 * format, the tier numbers will start with 0. That is:
 *
 * aggroData[0] -> Tier 1
 * aggroData[1] -> Tier 2
 * aggroData[2] -> Tier 3 (Retreats)
 *
 */
var aggroData = [
	[
		['Trio', 'Control', 'Missing', 'Regenerated', {
			role: 'annotation'
		}],
		['11', 6, 6, 0, ''],
		['23', 34, 6, 9, ''],
		['25', 15, 18, 1, ''],
		['29', 36, 16, 24, ''],
		['30', 23, 10, 10, ''],
		['31', 62, 29, 27, ''],
		['32', 77, 65, 24, ''],
		['35', 16, 51, 53, ''],
		['36', 19, 16, 1, ''],
		['39', 80, 64, 16, ''],
		['40', 51, 63, 2, ''],
		['42', 47, 6, 0, ''],
		['43', 20, 2, 177, ''],
	],
	[
		['Trio', 'Control', 'Missing', 'Regenerated', {
			role: 'annotation'
		}],
		['11', 17, 11, 1, ''],
		['23', 33, 10, 13, ''],
		['25', 26, 25, 8, ''],
		['29', 33, 14, 13, ''],
		['30', 15, 11, 1, ''],
		['31', 35, 21, 20, ''],
		['32', 32, 30, 23, ''],
		['35', 17, 25, 8, ''],
		['36', 9, 15, 4, ''],
		['39', 10, 18, 1, ''],
		['40', 52, 43, 1, ''],
		['42', 25, 2, 2, ''],
		['43', 62, 3, 47, ''],
	],
	[
		['Trio', 'Control', 'Missing', 'Regenerated', {
			role: 'annotation'
		}],
		['11', 1, 17, 13, ''],
		['23', 2, 10, 16, ''],
		['25', 8, 0, 31, ''],
		['29', 3, 17, 1, ''],
		['30', 3, 1, 21, ''],
		['31', 5, 18, 4, ''],
		['32', 8, 13, 31, ''],
		['35', 42, 9, 27, ''],
		['36', 8, 0, 26, ''],
		['39', 34, 3, 113, ''],
		['40', 1, 3, 55, ''],
		['42', 1, 30, 28, ''],
		['43', 30, 87, 0, ''],
	],
];