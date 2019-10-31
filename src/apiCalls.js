const apiKey = `$2a$10$s7FC7dj4ik0afkB/Dnr4Ju6NXS0Os8RtRntk97bi8gx.KqvmqgNgK`;

export const getHouses = async () => {
    const response = await fetch(`https://www.potterapi.com/v1/sortingHat`);
    const data = await response.json();

    if(!response.ok) {
      throw new Error('No Houses Found!');
    } else {
      return data;
    }
}