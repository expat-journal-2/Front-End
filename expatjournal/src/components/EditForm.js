import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const initialItem = {
    name: '',
    image_URL: '',
    location: '',
    content: '',
    author: '',
    date: '',
}

