export interface ShowAddSwitch {
	localinfeciton: boolean;
	confirm: boolean;
	nowSevere: boolean;
	localConfirm: boolean;
	heal: boolean;
	nowConfirm: boolean;
	importedCase: boolean;
	noInfect: boolean;
	all: boolean;
	suspect: boolean;
	dead: boolean;
}

export interface Today {
	confirm: number;
	isUpdated: boolean;
}

export interface Total {
	heal: number;
	provinceLocalConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	nowConfirm: number;
	showHeal: boolean;
	highRiskAreaNum: number;
	dead: number;
	wzz: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
	adcode: string;
	showRate: boolean;
	confirm: number;
}

export interface Today {
	dead_add: number;
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: string;
	local_confirm_add: number;
	abroad_confirm_add: number;
}

export interface Total {
	mtime: string;
	wzz: number;
	provinceLocalConfirm: number;
	continueDayZeroConfirmAdd: number;
	showRate: boolean;
	heal: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	adcode: string;
	nowConfirm: number;
	confirm: number;
	dead: number;
	showHeal: boolean;
	continueDayZeroConfirm: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	confirm: number;
	heal: number;
	showHeal: boolean;
	nowConfirm: number;
	dead: number;
	continueDayZeroLocalConfirm: number;
	showRate: boolean;
	wzz: number;
	continueDayZeroLocalConfirmAdd: number;
	mtime: string;
	adcode: string;
	provinceLocalConfirm: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
	name: string;
}

export interface AreaTree {
	name: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface ChinaTotal {
	localConfirmAdd: number;
	highRiskAreaNum: number;
	dead: number;
	importedCase: number;
	noInfect: number;
	showLocalConfirm: number;
	localConfirmH5: number;
	nowLocalWzz: number;
	localConfirm: number;
	showlocalinfeciton: number;
	noInfectH5: number;
	localWzzAdd: number;
	mRiskTime: string;
	confirm: number;
	suspect: number;
	nowSevere: number;
	local_acc_confirm: number;
	deadAdd: number;
	heal: number;
	confirmAdd: number;
	mtime: string;
	mediumRiskAreaNum: number;
	nowConfirm: number;
}

export interface ChinaAdd {
	heal: number;
	dead: number;
	noInfect: number;
	localConfirm: number;
	localConfirmH5: number;
	confirm: number;
	nowConfirm: number;
	suspect: number;
	nowSevere: number;
	importedCase: number;
	noInfectH5: number;
}

export interface Diseaseh5Shelf {
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
}

export interface LocalCityNCOVDataList {
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	province: string;
	adcode: string;
	date: string;
	mtime: string;
	local_wzz_add: string;
	city: string;
	isUpdated: boolean;
	local_confirm_add: number;
	isSpecialCity: boolean;
}

export interface Data {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}

export interface Result {
	data: Data;
}

export interface RootObject {
	status: number;
	message: string;
	result: Result;
}