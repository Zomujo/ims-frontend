"use client";
import React from "react";

import CustomSelect from "@/components/Select";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IFilter, initialFilter } from "./page";

import drugs from "@/data/drugs";
import suppliers from "@/data/suppliers";

const drugOptions = drugs.map((drug) => drug.name);

const statusOptions = ["Requested", "Delivery", "Cancelled", "Received"];
const supplierOptions = suppliers.map((supplier) => supplier.name + " " + supplier.id);

interface IFiltersComponent {
	setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
	filters: IFilter;
	setFilters: React.Dispatch<React.SetStateAction<IFilter>>;
}

const Filters = ({ setShowFilters, filters, setFilters }: IFiltersComponent) => {
	const setValue = (name: string, value: string) => {
		setFilters((prev) => ({ ...prev, [name]: value }));
	};

	const filterDrugs = () => {
		console.log(filters);
	};
	return (
		<div className="h-screen bg-black bg-opacity-50 flex items-center justify-end px-3 w-full fixed top-0 left-0 z-[5]">
			<aside className="w-1/4 flex flex-col gap-4 h-[calc(100%-20px)] p-4 overflow-y-auto bg-white rounded-[5px]">
				<div className="flex items-center justify-between w-full">
					<h3 className="text-xl">Filters</h3>

					<button className="rounded-full bg-gray-100 p-[6px] hover:bg-gray-200" onClick={() => setShowFilters(false)}>
						<Icon icon="ic:round-close" className="text-xl" />
					</button>
				</div>
				<CustomSelect options={drugOptions} label="Drug Name" placeholder="Select option" value={filters.drugName} handleChange={(value) => setValue("drugName", value)} />
				<CustomSelect options={supplierOptions} label="Supplier" placeholder="Select option" value={filters.supplier} handleChange={(value) => setValue("supplier", value)} />
				<CustomSelect options={statusOptions} label="Status" placeholder="Select option" value={filters.status} handleChange={(value) => setValue("status", value)} />

				<div className="w-full  mt-auto flex gap-3 justify-between items-stretch">
					<button className="w-[30%] text-sm rounded-[10px]  py-2 bg-gray-100 hover:bg-gray-200" onClick={() => setFilters(initialFilter)}>
						Clear Filters
					</button>
					<button className="w-[65%] bg-sec py-2 rounded-[10px] text-white" onClick={filterDrugs}>
						Save
					</button>
				</div>
			</aside>
		</div>
	);
};

export default Filters;
