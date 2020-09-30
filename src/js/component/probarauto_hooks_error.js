import React, { useState, useContext, setStore } from "react";
import Autocomplete from "react-autocomplete";

const MyInput = () => {
	const [textInputLugar, setTextInputLugar] = useState();

	return (
		<Autocomplete
			items={[{ id: "1", label: "Madrid" }, { id: "2", label: "Barcelona" }, { id: "3", label: "Badajoz" }]}
			//shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
			getItemValue={item => item.label}
			renderItem={(item, highlighted) => (
				<div key={item.id} style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
					{item.label}
				</div>
			)}
			value={textInputLugar}
			onChange={e => setTextInputLugar(e.target.value)}
			onSelect={value => setTextInputLugar({ value })}
		/>
	);
};

export default MyInput;
