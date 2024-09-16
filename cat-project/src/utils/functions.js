export const slotsAvailable = (setAvailableTimes, visitDate) => {
  const today = new Date();
  const selectedDate = new Date(visitDate);

  const allSlots = [
    { value: '09:00-10:00', label: '09:00 - 10:00' },
    { value: '10:00-11:00', label: '10:00 - 11:00' },
    { value: '11:00-12:00', label: '11:00 - 12:00' },
    { value: '12:00-13:00', label: '12:00 - 13:00' },
    { value: '13:00-14:00', label: '13:00 - 14:00' },
    { value: '14:00-15:00', label: '14:00 - 15:00' },
    { value: '15:00-16:00', label: '15:00 - 16:00' },
  ];

  if (visitDate) {
    if (selectedDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
      const currentHour = today.getHours();
      const filteredSlots = allSlots.filter(slot => parseInt(slot.value.split(':')[0]) > currentHour);
      setAvailableTimes(filteredSlots);
    } else {
      setAvailableTimes(allSlots);
    }
  }
}