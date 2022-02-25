import React, { useState } from "react";

// import AdapterDateFns from "@mui/lab/AdapterLuxon";

// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";

// import TextField from "@mui/material/TextField";

function DateChoose() {
	// const onChange = (date) => {
	//   console.log(date.toString());
	// };

	// const [value, setValue] = useState(null);

	return (
		<div>
			{/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
				{/* <MobileDatePicker
					label="For mobile"
					// value={null}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/> */}
			{/* </LocalizationProvider> */}
		</div>
	);
}

export default DateChoose;
