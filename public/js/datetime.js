
let dates = $(".move-right");
for (i=0; i<dates.length; i++) {
  let cleanTime = (dates[i].textContent).trim();
  console.log(cleanTime);
  let local_date = moment.utc(cleanTime.textContent);
  console.log(local_date);
  dates[i].textContent = local_date.local();
}
