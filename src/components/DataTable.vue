<template>
  <div class="q-pa-md">
    <q-table
    class="alternate-row-colours"
      title="Patients"
      :rows="rows"
      :columns="columns"
      :separator="separator"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
      row-key="patientID"
      dark
      table-header-class="bg-indigo-9"
      table-class="bg-indigo-14"
      card-class="bg-indigo-10"
    >
    </q-table>
    <!-- Debugging purposes (shows which are selected)
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";

const columns = [
  {
    name: "patientID",
    required: true,
    label: "Patient ID",
    align: "left",
    field: (row) => row.patientID,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "patientName",
    align: "center",
    label: "Patient Name",
    field: "patientName",
    sortable: true,
  },
  {
    name: "studyDate",
    label: "Study Date",
    field: "studyDate",
    sortable: true,
  },
  { name: "studyDesc", label: "Study Description", field: "studyDesc" },
  {
    name: "modalities",
    label: "Modalities",
    field: "modalities",
    sortable: true,
  },
  {
    name: "imageCount",
    label: "No. of Images",
    field: "imageCount",
    sortable: true,
  },
];

const rows = [
  {
    patientID: "PatientID Test",
    patientName: "Patient Name",
    studyDate: "20/08/21",
    studyDesc: "CT scan of head",
    modalities: "CT",
    imageCount: "54",
  },
  {
    patientID: "John",
    patientName: "Doe",
    studyDate: "21/08/21",
    studyDesc: "CT scan of chest",
    modalities: "CT",
    imageCount: "40",
  },
  {
    patientID: "Jake",
    patientName: "A",
    studyDate: "21/08/21",
    studyDesc: "CT scan of chest",
    modalities: "CT",
    imageCount: "40",
  },
  {
    patientID: "James",
    patientName: "Deer",
    studyDate: "21/08/21",
    studyDesc: "CT scan of chest",
    modalities: "CT",
    imageCount: "40",
  },
];

export default {
  name: "DataTable",
  setup() {
      const selected = ref([])

      return {
        selected,
        separator: ref("cell"),
        columns,
        rows,

        getSelectedString () {
            return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
        }
    };
  },
};
</script>

<style>
/* .q-table tbody td:after {
  background: rgba(255, 0, 0, 0.2);
}
.q-table tbody td:before {
  background: rgba(255, 0, 0, 0.1);
} */
.alternate-roow-colours tr:nth-child(odd) {
    background: #304ffe;
}
.alternate-row-colours tr:nth-child(even) {
    background: #536dfe;
}

.bg-white {
  background: white;
}

.bg-grey {
  background: tomato;
}
</style>