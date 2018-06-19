# Welcome to pySTEPS!
<url>https://github.com/pySTEPS</url>

The pySTEPS initiative is a community that develops and maintains an easy to use, modular, free and open source python framework for short-term, ensemble prediction systems (STEPS).

The focus is on probabilistic nowcasting of radar precipitation fields, but pySTEPS is designed to allow a wider range of uses. 

## Quick-start guide
It is very easy to start using pySTEPS! You need to do two things:  <br/>
A. Download (clone) the pySTEPS repositories to your computer/server. <br/>
B. Install Anaconda2.7 and the needed python libraries. <br/>
Important: pySTEPS currently uses Python 2. In the future we will consider migrating to Python 3. <br/>

Here we will explain how to set up pySTEPS in a linux environment. For Windows you will have to download the repositories by hand.

### A. Downloading the pySTEPS respositories
To download the github repositories containing the pySTEPS modules proceed as follows:
1. Create a "pySTEPS" directory in your home folder or server ("mkdir pySTEPS"). Enter the directory ("cd pySTEPS").
2. Download the set of pySTEPS modules as follows:
pySTEPS_URL=<url>https://github.com/pySTEPS</url> <br/>
git clone $pySTEPS_URL/tutorials <br/>
git clone $pySTEPS_URL/iotools <br/>
git clone $pySTEPS_URL/datatools <br/>
git clone $pySTEPS_URL//motion <br/>
git clone $pySTEPS_URL/stepsnwc <br/>
etc <br/>
Important: each github repository contains a single pySTEPS module. <br/>
If you already have an appropriate python environment with all the needed python libraries (e.g. Anaconda) you can start trying the pySTEPS tutorials. Otherwise, go to step B.

### B. Installing Anaconda and the needed python libraries
It is strongly advised to install Anaconda 2.7 for optimal management of the basic python libraries needed by pySTEPS. <br/> 
You proceed as follows: <br/>
1. Download the appropriate Anaconda2.7 for your platform: https://www.anaconda.com/download/ <br/>
2. Install Anaconda. <br/>
3. Create a python virtual environment from Anaconda. "conda create -n yourenvname". <br/>
4. Activate the virtual environment. "source activate yourenvname". <br/>
5. Install the needed libraries as follows: <br/>
conda install opencv <br/>
conda install pyproj <br/>
conda install PIL <br/>
etc <br/>
If all the needed dependencies are properly installed, you should be able to run the pySTEPS tutorials. <br/>
For additional information on how to manage a conda virtual environments see https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/

## pySTEPS tutorials
Theses are the available tutorials: <br/>
tutorials/tutorial1_motion.py <br/>

There are two possible ways to run the tutorials: <br/>
1. You make the python script executable ("chmod + x tutorial1_motion.py") and run it (./tutorial1_motion.py) <br/>
2. You open a python session and copy the script step by step so that you have more time to understand how the code works :-) <br/>

## Getting in touch

## Announcements

### ERAD2018 short-course


