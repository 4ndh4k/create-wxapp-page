Component({
	data: {
		title: '<%= basename %>',
	},
	observers: {},
	pageLifetimes: {},
	methods: {
	  async onLoad(params: any) {
		console.log('page created', params);
	  }
	}
  });
