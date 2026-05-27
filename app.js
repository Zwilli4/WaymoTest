const incidents = [

    {
        vehicle_id: "WAYMO_1448",
        location: "Donelson Pike & Terminal Dr",
        severity: "Medium",
        incident_type: "traffic_delay",
        vehicle_speed: 32
    },

    {
        vehicle_id: "WAYMO_1047",
        location: "Vanderbilt Area",
        severity: "High",
        incident_type: "traffic_block",
        vehicle_speed: 38
    },

    {
        vehicle_id: "WAYMO_1335",
        location: "Downtown Nashville",
        severity: "Low",
        incident_type: "unsafe_stop",
        vehicle_speed: 15
    },

    {
        vehicle_id: "WAYMO_1219",
        location: "Donelson Pike & Terminal Dr",
        severity: "High",
        incident_type: "sensor_failure",
        vehicle_speed: 47
    },

    {
        vehicle_id: "WAYMO_1184",
        location: "Broadway & 5th Ave",
        severity: "Medium",
        incident_type: "route_recalculation",
        vehicle_speed: 22
    },

    {
        vehicle_id: "WAYMO_1422",
        location: "The Gulch",
        severity: "Low",
        incident_type: "pedestrian_detected",
        vehicle_speed: 11
    },

    {
        vehicle_id: "WAYMO_1077",
        location: "Music Row",
        severity: "Medium",
        incident_type: "lane_block",
        vehicle_speed: 29
    },

    {
        vehicle_id: "WAYMO_1361",
        location: "Nissan Stadium Area",
        severity: "High",
        incident_type: "traffic_block",
        vehicle_speed: 41
    },

    {
        vehicle_id: "WAYMO_1110",
        location: "East Nashville",
        severity: "Low",
        incident_type: "slow_response",
        vehicle_speed: 18
    },

    {
        vehicle_id: "WAYMO_1288",
        location: "Charlotte Ave",
        severity: "Medium",
        incident_type: "sensor_failure",
        vehicle_speed: 35
    }

];

document.getElementById("activeIncidents").innerText =
    incidents.length;

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
