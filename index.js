const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const zip = document.getElementById('zip');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const zipValue = zip.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'First name is required');
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'Last Name is required');
    } else {
        setSuccess(lastname);
    }

    if(zipValue === '') {
        setError(zip, 'Zip is required');
    } else if (zipValue.length < 5 ) {
        setError(zip, 'Zip code must be at least 5 digets.')
    } else {
        setSuccess(zip);
    }

};
