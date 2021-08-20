<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <!-- <label>Day & Time</label>
          <input
            type="date-time"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
          /> -->
      <!-- mask="dddd Do of MMM h:mmA" -->
      <div class="q-pa-md" style="max-width: 300px">
        <q-input filled v-model="date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date
                  v-model="date"
                  mask="dddd Do MMM YYYY, h:mmA"
                  color="teal-4"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time
                  v-model="date"
                  mask="dddd Do MMM YYYY, h:mmA"
                  color="teal-4"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
// import {date} from 'quasar'

export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      date: new Date(),
      time: "",
      dateTime: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert("Please add a task");
        return;
      }

      const newTask = {
        // id: Math.floor(Math.random() * 10000),
        text: this.text,
        day: this.date,
        // day: date.formatDate(this.date, 'dddd Do of MMM') + " at " + date.formatDate(this.date, 'h:mmA'),
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      // Clear form
      this.text = "";
      this.day = "";
    },
  },
};

// function formatDate(date) {
//   var monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   var month = "" + monthNames[date.getMonth()],
//     day = "" + getOrdinalSuffix(date.getDate()),
//     year = date.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [month, day, year].join(" ");
// }

// function getOrdinalSuffix(num) {
//   var j = num % 10,
//     k = num % 100;
//   if (j == 1 && k != 11) {
//     return num + "st";
//   }
//   if (j == 2 && k != 12) {
//     return num + "nd";
//   }
//   if (j == 3 && k != 13) {
//     return num + "rd";
//   }
//   return num + "th";
// }
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>