// import React, { Component } from 'react'
import { init } from '@rematch/core'
import * as models from './models'
import createSelectPlugin from '@rematch/select'


const selectPlugin = createSelectPlugin()

const store = init ({
    models,
    plugins: [selectPlugin]
})

export default store