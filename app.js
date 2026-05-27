const incidents = [

    {
        vehicle_id: "WAYMO_1001",
        location: "Broadway & 5th Ave",
        severity: "High",
        incident_type: "traffic_block",
        vehicle_speed: 12
    },

    {
        vehicle_id: "WAYMO_1002",
        location: "Music Row",
        severity: "Medium",
        incident_type: "sensor_failure",
        vehicle_speed: 28
    },

    {
        vehicle_id: "WAYMO_1003",
        location: "The Gulch",
        severity: "Low",
        incident_type: "unsafe_stop",
        vehicle_speed: 7
    }

];

document.getElementById("activeIncidents").innerText = incidents.length;

document.getElementById("vehicleCount").innerText =
    new Set(incidents.map(i => i.vehicle_id)).size;

document.getElementById("highSeverity").innerText =
    incidents.filter(i => i.severity === "High").length;

const table = document.getElementById("incidentTable");

incidents.forEach(incident => {

    const row = `
        <tr>
            <td>${incident.vehicle_id}</td>
            <td>${incident.location}</td>
            <td>${incident.severity}</td>
            <td>${incident.incident_type}</td>
            <td>${incident.vehicle_speed} mph</td>
        </tr>
    `;

    table.innerHTML += row;
});
