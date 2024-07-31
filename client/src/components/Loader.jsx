import ClipLoader from "react-spinners/ClipLoader";

function Loader() {

    return (
        <div className="sweet-loading" style={{ height: "100vh", display: "grid", placeItems: "center" }}  >

            <ClipLoader
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                color="red"
            />
        </div>
    )
}

export default Loader




