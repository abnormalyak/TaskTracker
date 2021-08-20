<template>
  <div class="q-pa-md">
    <q-table title="Patients" :rows="rows" :columns="columns" row-key="name" />
  </div>
  <router-link to="/">Home</router-link>
</template>

<script>
const columns = [
  {
    name: 'patientID',
    required: true,
    label: 'Patient ID',
    align: 'left',
    field: row => row.patientID,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'patientName', align: 'center', label: 'Patient Name', field: 'patientName', sortable: true},
  { name: 'studyDate', label: 'Study Date', field: 'studyDate', sortable: true},
  { name: 'studyDesc', label: 'Study Description', field: 'studyDesc'},
  { name: 'modalities', label: 'Modalities', field: 'modalities', sortable: true },
  { name: 'imageCount', label: 'No. of Images', field: 'imageCount', sortable: true }
]

const rows = [
  {
    patientID: 'PatientID Test',
    patientName: 'Patient Name',
    studyDate: '20/08/21',
    studyDesc: 'CT scan of head',
    modalities: 'CT',
    imageCount: '54'
  },
  {
    patientID: 'John',
    patientName: 'Doe',
    studyDate: '21/08/21',
    studyDesc: 'CT scan of chest',
    modalities: 'CT',
    imageCount: '40'
  },
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>