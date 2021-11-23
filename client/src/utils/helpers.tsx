function format_date(date:any)  {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    };

function format_amount(amount:any) {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    }

  
export {format_date, format_amount}