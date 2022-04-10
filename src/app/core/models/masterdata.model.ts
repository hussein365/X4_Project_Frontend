import { Mandant } from "./Mandant.model";
import { Ta_typ } from "./ta_typ.model";

export class Masterdata {

	oid: string;


	id: number;

	xid: string;

	description: string;


	external_object_id: string;


	moddate: Date;

	name: string;


	object_class: number;


	object_type: string;


	fk_md: number;


	init_date: number;


	mandant: Mandant;

	process: number;


	randmandant: number;

	short_name: string;



	tid: number;


	valid_from: Date;


	valid_until: Date;


	dmt: string;


	type0: string;


	type1: string;

	name1: string;


	type2: string;

	name2: string;


	type3: string;


	name3: string;


	type4: string;


	name4: string;


	type5: string;


	name5: string;

	type6: string;

	name6: string;


	type7: string;


	name7: string;


	type8: string;

	name8: string;

	type9: string;
	name9: string;

	type10: string;

	name10: string;


	tatyp: Ta_typ;

	ta: number;


	children_link: string;

	level: number;

}