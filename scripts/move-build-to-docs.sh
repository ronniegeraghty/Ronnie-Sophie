#!/bin/bash

srcdir="../build"
dstdir="../docs"

for f in ${srcdir}/*
do
    cp -r $f $dstdir
done