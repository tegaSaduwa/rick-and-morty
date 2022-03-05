const ResultsCard = ({ characters }) => {
  return (
    <div className="results row py-5 px-5">
      {characters?.length > 0 && (
        <small>
          <i>Please hover to view info about character</i>
        </small>
      )}
      {characters?.length > 0
        ? characters?.map(
            ({ id, image, name, status, species, type, episode }) => (
              <div className="card_container col-2 mt-4" key={id}>
                <img src={image} class="card_image" alt="character_image" />
                <div className="overlay">
                  <div className="text p-2">
                    <h6>Name: {name}</h6>
                    <div>
                      <p>Status: {status || "Not Specified"}</p>
                      <p>Species: {species || "Not Specified"}</p>
                      <p>Type: {type || "Not Specified"}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        : "No Characters Found"}
    </div>
  );
};

export default ResultsCard;
