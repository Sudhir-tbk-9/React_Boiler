import { Grid } from '@mui/material';
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

function Setting({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <> 
      <Grid container spacing={2} className=''>
        <Grid item xs={6}>
          <div>
            <InputLabel
              htmlFor="outgoing_mail_server"
              style={{
                color: "#714B67",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              Outgoing Mail Server
            </InputLabel>
            <TextField
              id="outgoing_mail_server"
              variant="standard"
              required
              name="outgoing_mail_server"
              className="w-full mt-2"
              value={formData['outgoing_mail_server']}
              onChange={handleChange}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Setting;
