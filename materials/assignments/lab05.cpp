#include <iostream>
#include <string>

class Person {
private:
    std::string name;

public:
    Person(std::string personName) : name(personName) {}

    std::string getName() const {
        return name;
    }
};

class Student : public Person {
private:
    int score;

public:
    Student(std::string studentName, int studentScore)
        : Person(studentName), score(studentScore) {}

    void show() const {
        // TODO 1: Print the inherited name and this student's score.
    }
};

int main() {
    Student first("Alex", 85);
    Student second("Sam", 92);
    first.show();
    second.show();
    return 0;
}
