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


	type_0: string;


	type_1: string;

	name_1: string;


	type_2: string;

	name_2: string;


	type_3: string;


	name_3: string;


	type_4: string;


	name_4: string;


	type_5: string;


	name_5: string;

	type_6: string;

	name_6: string;


	type_7: string;


	name_7: string;


	type_8: string;

	name_8: string;

	type_9: string;
	name_9: string;

	type_10: string;

	name_10: string;


	ta_typ: Ta_typ;

	ta: number;


	children_link: string;

	level: number;

}