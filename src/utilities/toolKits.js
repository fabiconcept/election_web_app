export function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(num % 1000000000 !== 0 ? 1 : 0) + 'B';
    }
    else if (num >= 1000000) {
      return (num / 1000000).toFixed(num % 1000000 !== 0 ? 1 : 0) + 'M';
    }
    else if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 !== 0 ? 1 : 0) + 'K';
    }
    else {
      return num.toString();
    }
  }
  