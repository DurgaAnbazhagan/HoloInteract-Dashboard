const table = document.getElementById("deviceTable");
const searchInput = document.getElementById("searchInput");

function displayDevices(filteredDevices) {
    table.innerHTML="";

    filteredDevices.forEach(device => {
    const row=` 
    <tr>
    <td>${device.name}</td>
    <td>${device.location}</td>
    <td>
    <span class="${device.status === 'Online'? 'status-online': 'status-offline'}">
    ${device.status}
    </span>
    </td>
    <td>${device.lastActive}</td>
    <td><button class="action-btn">view</button></td>
</tr>
`;
table.innerHTML+=row;
});
}
displayDevices(devices);

searchInput.addEventListener("keyup",() => {
    const value = searchInput.value.toLowerCase();
    
    const filtered = devices.filter(device => 
        device.name.toLowerCase().includes(value) ||
        device.location.toLowerCase().includes(value) ||
        device.status.toLowerCase().includes(value)
    );
    displayDevices(filtered);
});