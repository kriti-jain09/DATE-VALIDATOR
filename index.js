function validate(dd,mm,yyyy){
    var y= parseInt(dd.value);
    var x= parseInt(mm.value);
    var z= parseInt(yyyy.value);

    var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
// Non-leap year case:

    if (y==1 || y>2 && y<=12)
  {
  if (x>ListofDays[y-1])
  {
        alert('Invalid date format!');
        return false;
  }
  else
  {
    alert('Valid date format!');
    return false;
  }
  }

// Leap year case:

  if (y==2)
  {
    var lyear = false;
    if ( (!(z % 4) && (z % 100)) || !(z % 400)) 
    {
        lyear = true;
    }
    //console.log(lyear);
    if ((lyear==false) && (x>=29))
    {
        alert('Invalid date format!');
        return false;
    }
    if ((lyear==true) && (x>29))
    {
        alert('Invalid date format!');
        return false;
    }
    if (((lyear==false) && (x<=28))||((lyear==true) && (x<=29)))
    {
      alert('Valid date format!');
      return false;
      
    }
    
  }
  else
  {
  alert("Invalid date format!");
  return false;
  }
}