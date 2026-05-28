async function loadIncidents() {

    const response = await fetch(
        'https://docs.google.com/spreadsheets/d/1S3mFzGAEyCyutiYBPH9EPQHEAvKEUaMyj26oU5ln08w/export?format=csv'
    );

    const csvText = await response.text();

    const rows = csvText.split('\n').slice(1);

    const incidents = rows.map(row => {

        const columns = row.split(',');

        return {

            vehicle_id: columns[3],
            location: columns[5],
            severity: columns[4],
            incident_type: columns[6],
            vehicle_speed: columns[7]

        };

    });

    document.getElementById("activeIncidents").innerText =
        incidents.length;

    document.getElementById("vehicleCount").innerText =
        new Set(incidents.map(i => i.vehicle_id)).size;

    document.getElementById("highSeverity").innerText =
        incidents.filter(i => i.severity === "High").length;

    const table = document.getElementById("incidentTable");

    table.innerHTML = "";

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

}

loadIncidents();
