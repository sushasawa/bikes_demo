export class Bikes {
	constructor(
		public created_date: string, 
		public current_location_name: string, 
		public display_name: string, 
		public display_price: number, 
		public make_name: string, 
		public outlet: string, 
		public vehicle_model_name: string, 
		public variant_name: string, 
		public kms_driven: number, 
		public years_old: number, 
		public year_of_mfg: number, 
		public images: any){
	}
}