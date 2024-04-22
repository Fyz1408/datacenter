export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export function formatTime(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
};

export function getTodaysDate() {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}