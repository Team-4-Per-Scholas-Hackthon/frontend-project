import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const MyCalendarComponent = () => {
	const [events, setEvents] = useState([
		{ title: "event 1", date: "2025-12-15" },
		{ title: "event 2", date: "2025-12-17" },
		{ title: "Abel", date: "2025-12-25" },
		{ title: "Amaris on the mic", date: "2025-12-25" },
	]);

	const handleDateClick = (arg) => {
		// bind with an arrow function to access component scope
		console.log(arg);
		alert(arg.dateStr);
		// You can add logic here to add events or open a modal
	};

	return (
		<div>
			<h1>My Calendar</h1>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridMonth"
				events={events}
				dateClick={handleDateClick}
				editable={true} // allows events to be dragged and dropped
				selectable={true} // allows date ranges to be selected
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "dayGridMonth,dayGridWeek,dayGridDay",
				}}
			/>
		</div>
	);
};

export default MyCalendarComponent;
