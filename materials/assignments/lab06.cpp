#include <iostream>

class Person {
public:
    virtual void introduce() const {
        std::cout << "I am a person." << '\n';
    }

    virtual ~Person() = default;
};

class Student : public Person {
public:
    void introduce() const override {
        // TODO 1: Print the student's introduction.
    }
};

class Teacher : public Person {
public:
    void introduce() const override {
        // TODO 2: Print the teacher's introduction.
    }
};

void showIntroduction(const Person& person) {
    person.introduce();
}

int main() {
    Student student;
    Teacher teacher;
    showIntroduction(student);
    showIntroduction(teacher);
    return 0;
}
