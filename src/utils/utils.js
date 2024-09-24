function getInitials(name) {
  if (!name) return ""; 

  const nameParts = name.split(" ");


  const firstInitial = nameParts[0].charAt(0);


  const lastInitial =
    nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";


  return (firstInitial + lastInitial).toUpperCase();
}

export default getInitials;