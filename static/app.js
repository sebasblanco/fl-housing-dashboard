function toggleView() {
  var chart = document.getElementById('chartView');
  var table = document.getElementById('tableView');
  var btn = document.getElementById('tableToggle');
  var showingTable = !table.classList.contains('hidden');
  if (showingTable) {
    table.classList.add('hidden');
    chart.classList.remove('hidden');
    btn.textContent = 'View as table';
  } else {
    table.classList.remove('hidden');
    chart.classList.add('hidden');
    btn.textContent = 'View as chart';
  }
}
