<template>
    <div class="hello">
        <div>{{msg}}</div>
        <button @click="handleClick()">click</button>
        <table v-if="items.length>0" class="table">
            <caption>统计图</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>日期</th>
                    <th>随机数</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="item.date" v-for="item in items">
                    <th scope="row">1</th>
                    <td>{{item.date}}</td>
                    <td>{{item.temperatureC}}</td>
                    <td>{{item.summary}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        data() {
            return {
                items: []
            }
        },
        methods: {
            handleClick: function () {
                fetch('/api/weatherforecast')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json);

                        this.items = json;
                    }).catch(err => alert(err))
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
